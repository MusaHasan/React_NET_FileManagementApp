using Microsoft.EntityFrameworkCore;
using React_NET_FileManagement.Data.Model;

namespace React_NET_FileManagement.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<Appointment> Appointments { get; set; }
    }
}
