namespace BookStore.Domain.Entities
{
    public class Book
    {
        public int Id { get; set; }
        public required string Title { get; set; }
        public required string Author { get; set; }
        public required string ISBN { get; set; }
        public required decimal Price { get; set; }
        public int Stock { get; set; }
    }
}