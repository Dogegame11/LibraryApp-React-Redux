import Booklist from "./components/Booklist/Booklist";
import Bookform from "./components/bookform/Bookform";
import Filter from "./components/Filter/Filter";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-amber-100 via-amber-200 flex flex-col items-center">
        <header className="w-full bg-amber-900 text-amber-50 py-6 shadow-md">
          <h1 className="text-5xl font-serif tracking-wide text-center">
            My library
          </h1>
          <p className="text-center text-amber-200 text-lg mt-20">
            Manage your favourite books with style
          </p>
        </header>

        <main className="flex flex-col md:flex-row justify-center items-start gap-10 w-full max-w-6xl mt-10 px-6 pb-10">
          <section className="w-full md:w-1/3 bg-amber-50 rounded-2xl shadow-xl p-6 border border-amber-200">
            <h2 className="text-2xl font-semibold text-amber-900 mb-4">
              Add a new book
            </h2>
            <Bookform />
          </section>

          <section className="w-full md:w-2/3 bg-amber-50 rounded-2xl shadow-xl p-6 border border-amber-200">
            <div className="mb-6">
              <Filter />
            </div>
            <Booklist />
          </section>
        </main>

        <footer className="mt-auto bg-amber-900 text-amber-100 py-4 w-full text-center text-sm">
          {new Date().getFullYear()} My Library - built with React and Redux
        </footer>
      </div>
    </>
  );
}

export default App;
