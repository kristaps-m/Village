using Microsoft.EntityFrameworkCore;
using Village.Data;
using Village.Services.Interfaces;
using Village.Services.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

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
    options.AllowAnyHeader().AllowAnyMethod().AllowCredentials().WithOrigins("http://localhost:3000");
});

app.UseAuthorization();

app.MapControllers();

app.Run();
