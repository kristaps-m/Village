using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Village;
using Village.Core;
using Village.Core.Interfaces;
using Village.Core.Models;
using Village.Data;
using Village.Services.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

//adding jwt auth
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            //define which claim requires to check
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            //store the value in appsettings.json
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Issuer"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
        };
    });
builder.Services.AddMvc(); // IS THIS NESSESARY??

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
// FIX CORS ERROR?-----------------------------------------------------------------------
//builder.Services.AddCors(options =>{options.AddPolicy(name: "VillageOrigins",
//    policy =>
//    {
//        policy.WithOrigins("https://localhost:4200").AllowAnyMethod().AllowAnyHeader();
//        //policy.WithOrigins("https://localhost:7236",
//        //    "https://localhost:7236");
//    });
//});
//-----------------------------------------------------------------------

// https://stackoverflow.com/questions/69472240/asp-net-6-identity-sqlite-services-adddbcontext-how
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

//app.UseCors("VillageOrigins");
app.UseCors(options =>
{
    options.AllowAnyHeader().AllowAnyMethod().AllowCredentials().WithOrigins("http://localhost:4200");
});


app.UseRouting(); // is this nessesary?
//adding UseAuthentication
app.UseAuthentication(); // I added
//app.UseMvc(); // is this nessesary? // I added
app.UseAuthorization();

app.MapControllers();

app.Run();
