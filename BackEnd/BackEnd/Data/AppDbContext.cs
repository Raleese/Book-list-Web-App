using Microsoft.EntityFrameworkCore;

namespace BackEnd.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Book> favorites { get; set; }
    }
}
