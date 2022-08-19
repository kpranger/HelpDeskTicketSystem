using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace HelpDeskTickets.Models
{
    public partial class HelpDeskDBContext : DbContext
    {
        public HelpDeskDBContext()
        {
        }

        public HelpDeskDBContext(DbContextOptions<HelpDeskDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Favorite> Favorites { get; set; } = null!;
        public virtual DbSet<Ticket> Tickets { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                // optionsBuilder.UseSqlServer("Data Source=.\\sqlexpress;Initial Catalog=HelpDeskDB; Integrated Security=SSPI;");
                optionsBuilder.UseSqlServer("Data Source=dshjkdslfhkjdfshalkfdshk.database.windows.net;Initial Catalog=HelpDeskDB; User Id=JAdmin; Password=BajaBlast123;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Favorite>(entity =>
            {
                entity.HasKey(e => e.KeyId)
                    .HasName("PK__Favorite__21F5BE4785FF173D");

                entity.HasOne(d => d.Ticket)
                    .WithMany(p => p.Favorites)
                    .HasForeignKey(d => d.TicketId)
                    .HasConstraintName("FK__Favorites__Ticke__6383C8BA");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Favorites)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__Favorites__UserI__628FA481");
            });

            modelBuilder.Entity<Ticket>(entity =>
            {
                entity.Property(e => e.Category).HasMaxLength(255);

                entity.Property(e => e.Details).HasMaxLength(255);

                entity.Property(e => e.ResolutionDetails).HasMaxLength(255);

                entity.Property(e => e.ResolvedDate).HasColumnType("date");

                entity.Property(e => e.Status).HasMaxLength(30);

                entity.Property(e => e.SubmittedDate).HasColumnType("date");

                entity.Property(e => e.Title).HasMaxLength(255);

                entity.HasOne(d => d.FavoritedUser)
                    .WithMany(p => p.TicketFavoritedUsers)
                    .HasForeignKey(d => d.FavoritedUserId)
                    .HasConstraintName("FK__Tickets__Favorit__5FB337D6");

                entity.HasOne(d => d.ResolvedUser)
                    .WithMany(p => p.TicketResolvedUsers)
                    .HasForeignKey(d => d.ResolvedUserId)
                    .HasConstraintName("FK__Tickets__Resolve__60A75C0F");

                entity.HasOne(d => d.SubmittedUser)
                    .WithMany(p => p.TicketSubmittedUsers)
                    .HasForeignKey(d => d.SubmittedUserId)
                    .HasConstraintName("FK__Tickets__Submitt__5EBF139D");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.FirstName).HasMaxLength(255);

                entity.Property(e => e.LastName).HasMaxLength(255);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
