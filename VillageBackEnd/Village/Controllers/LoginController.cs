using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.Extensions.Configuration;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Village.Core.Models;

namespace Village.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : Controller
    {
        private IConfiguration _config;

        public LoginController(IConfiguration config)
        {
            _config = config;
        }
        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody] UserModel login)
        {
            IActionResult response = Unauthorized();
            var user = AuthenticateUser(login);

            if (user != null)
            {
                var tokenString = GenerateJSONWebToken(user);
                response = Ok(new { token = tokenString });
            }

            return response;
        }

        private string GenerateJSONWebToken(UserModel userInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Issuer"],
              null,
              expires: DateTime.Now.AddMinutes(120),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private UserModel AuthenticateUser(UserModel login)
        {
            UserModel user = null;

            //Validate the User Credentials
            //Demo Purpose, I have Passed HardCoded User Information
            if (login.Username == "Kristaps" && login.EmailAddress == "kristaps.test@gmail.com")
            {
                user = new UserModel { Username = "Kristaps Test", EmailAddress = "kristaps.test@gmail.com" };
            }
            return user;
        }

        //private IConfiguration _config;

        //public LoginController(IConfiguration config)
        //{
        //    _config = config;
        //}

        //public IActionResult Index()
        //{
        //    ViewBag.accessToken = generateJwt();
        //    return View();
        //}

        //private string generateJwt()
        //{
        //    var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
        //    var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

        //    //If you've had the login module, you can also use the real user information here
        //    var claims = new[] {
        //    new Claim(JwtRegisteredClaimNames.Sub, "user_name"),
        //    new Claim(JwtRegisteredClaimNames.Email, "user_email"),
        //    new Claim("DateOfJoing", "2022-09-12"),
        //    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
        //    };

        //    var token = new JwtSecurityToken(_config["Jwt:Issuer"],
        //        _config["Jwt:Issuer"],
        //        claims,
        //        expires: DateTime.Now.AddMinutes(120),
        //        signingCredentials: credentials);

        //    return new JwtSecurityTokenHandler().WriteToken(token);
        //}
    }
}
