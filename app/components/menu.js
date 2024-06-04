export default function Menu({ children }) {
    return (
      <section id="menu" className="bg-orange py-8">
        <h2 className="text-center text-3xl font-bold mb-8">Menu</h2>
        <ul id="products" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {children}
        </ul>
      </section>
    );
}