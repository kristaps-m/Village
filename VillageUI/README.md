# VillageUI

### My TODOs

- [ ] remove number and floor for apartment edit?
- [ ] add cancel button for editing!
- [ ] add pop up if changes are saved successfully!
- [ ] create table row as link to next page

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

How I Added OAuth2 to this project:

1. https://stackoverflow.com/questions/73658327/how-to-implement-oauth2-0-authentication-token-in-asp-net-core-web-api
2. https://www.c-sharpcorner.com/article/jwt-json-web-token-authentication-in-asp-net-core/

In .net 6, going to program.cs and adding these code:

```
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args); // default code
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
```

Package instalation failed :(
Install Microsoft.AspNetCore.Authentication.JwtBearer 6.0.22 (My project is .NET 6)

Add more code:

```
app.UseRouting(); // is this nessesary?
//adding UseAuthentication
app.UseAuthentication(); // I added
```

in HouseContoller.cs;
Add :

```
    // at top
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;

		[Route("all-houses")]
		[HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAllHome()
		{
			await Task.Delay(2000); // 2-second delay

			var home = _houseService.GetAll();
			var houseDTOs = home.Select(h => _mapper.Map<HouseDTO>(h));

			return Ok(houseDTOs);
		}
```
