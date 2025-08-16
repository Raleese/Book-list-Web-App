using BackEnd.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddControllers();

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:5173") // React dev server port
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials(); // optional if you use cookies/auth
    });
});

// Configure DbContext
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseMySql(
        builder.Configuration.GetConnectionString("BooksConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("BooksConnection"))
    );
});

var app = builder.Build();

// Enable CORS BEFORE routing/controllers
app.UseCors("AllowReactApp");

app.MapControllers();

app.Run();
