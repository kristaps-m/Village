using Microsoft.AspNetCore.Http;
using System.Security.Claims;
using Village.Core.Interfaces.UserService;

namespace Village.Services.UserService
{
    public class UserService : IUserService
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public UserService(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public string GetMyName()
        {
            var result = string.Empty;
            if (_httpContextAccessor.HttpContext != null)
            {
                //result = _httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Name);
                result = _httpContextAccessor.HttpContext.User.Claims.First(x => x.Type == ClaimTypes.Name).Value;
            }
            return result;
        }
    }
}
