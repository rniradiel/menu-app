'use client';

export default function Reserve() {
  return (
    <section id="about" className="bg-gold w-full relative px-2 py-8">
      <div className="flex justify-center items-center flex-col p-4">
        <h2 className="text-3xl text-white font-bold mb-4">Reserve a Table</h2>
        <p className="text-white mb-8">Plan your Visit</p>
        <form action="" className="min-w-full md:min-w-[500px] flex flex-col justify-center">
            <div className="formGroup">
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
                className="border-white rounded shadow-2xl p-4 mb-4 w-full"
                />
            </div>
            <div className="formGroup">
                <label htmlFor="email" hidden>
                    Email
                </label>
                <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                required
                className="border-white rounded shadow-2xl p-4 mb-4 w-full"
                />
            </div>
            <div className="formGroup">
                <label htmlFor="date" hidden>
                    Date
                </label>
                <input
                type="text"
                name="date"
                id="date"
                placeholder="Date"
                required
                className="border-white rounded shadow-2xl p-4 mb-4 w-full"
                />
            </div>
            <div className="formGroup">
                <label htmlFor="time" hidden>
                    Time
                </label>
                <input
                type="text"
                name="time"
                id="time"
                placeholder="Time"
                required
                className="border-white rounded shadow-2xl p-4 mb-4 w-full"
                />
            </div>
            <div className="formGroup">
                <label htmlFor="guest" hidden>
                    Guest
                </label>
                <input
                type="text"
                name="guest"
                id="guest"
                placeholder="No. of guests"
                required
                className="border-white rounded shadow-2xl p-4 mb-4 w-full"
                />
            </div>
            <div className="formGroup">
                <label htmlFor="notes" hidden>
                    Notes
                </label>
                <textarea
                name="notes"
                id="notes"
                placeholder="Notes"
                required
                className="border-white rounded shadow-2xl p-4 mb-4 w-full">

                </textarea>
            </div>
            <button 
              className="bg-white hover:bg-blue hover:text-white border-none rounded-md px-4 py-2 text-blue cursor-pointer font-bold"
            >
              Submit
            </button>
        </form>
      </div>
    </section>
  );
}
