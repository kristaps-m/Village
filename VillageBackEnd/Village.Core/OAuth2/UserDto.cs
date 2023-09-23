namespace Village.Core.OAuth2
{
    public class UserDto
    {
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public bool IsManager { get; set; } = false;
    }
}
