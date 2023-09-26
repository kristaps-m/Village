global using Village.Services.UserService;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Filters;
using System.Text;
using Village;
using Village.Core.Interfaces;
using Village.Core.Interfaces.UserService;
using Village.Data;
using Village.Services.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddHttpContextAccessor();
builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
    {
        Description = "Standard Authorization header using the Bearer scheme (\"bearer {token}\")",
        In = ParameterLocation.Header,
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey
    });

    options.OperationFilter<SecurityRequirementsOperationFilter>();
});
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8
                .GetBytes(builder.Configuration.GetSection("AppSettings:Token").Value)),
            ValidateIssuer = false,
            ValidateAudience = false
        };
    });

// https://stackoverflow.com/questions/69472240/asp-net-6-identity-sqlite-services-adddbcontext-how
builder.Services.AddScoped<IUserService, UserService>();
var connectionString = builder.Configuration.GetConnectionString("village");
builder.Services.AddDbContext<VillageDbContext>(x => x.UseSqlServer(connectionString));

builder.Services.AddScoped<IVillageDbContext, VillageDbContext>();
builder.Services.AddScoped<IDbService, DbService>();

builder.Services.AddScoped<IApartmentService, ApartmentService>();
builder.Services.AddScoped<IHouseService, HouseService>();
builder.Services.AddScoped<IInhabitantService, InhabitantService>();
builder.Services.AddScoped<IApartmentInhabitantService, ApartmentInhabitantService>();
builder.Services.AddScoped<IHouseApartmentService, HouseApartmentService>();
builder.Services.AddScoped<IInhabitantApartmentService, InhabitantApartmentService>();
// Mapper
builder.Services.AddSingleton<IMapper>(AutoMapperConfig.CreateMapper());

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(options =>
{
    options.AllowAnyHeader().AllowAnyMethod().AllowCredentials().WithOrigins("http://localhost:4200");
});
app.UseHttpsRedirection();
app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
