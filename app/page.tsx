'use client'
import Image from "next/image";
import React from "react";

export default function Home() {
  const [rating, setRating] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const rating = formData.get('rating');
    setRating(Number(rating));
    setSubmitted(true);
  }

  return (
    <main className="bg-slate-950 h-screen grid justify-center items-center p-8">
      {!submitted && (
        <form onSubmit={handleSubmit} className="bg-gradient-to-b from-slate-800 to-slate-900 max-w-96 rounded-lg flex flex-col gap-6 p-5">
          <span className="rounded-full bg-slate-700 flex items-center justify-center h-12 w-12">
            <Image src="/icon-star.svg" alt="star" width="20" height="20" />
          </span>
          <h1 className="text-white text-2xl font-bold">How did we do?</h1>
          <p className="text-slate-400">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          <div className="flex flex-wrap justify-between gap-6">
            <input className="hidden peer/one" type="radio" id="one" name="rating" value="1" />
            <label className="rounded-full bg-slate-700 flex items-center justify-center h-12 w-12 cursor-pointer hover:bg-orange-500 hover:text-white text-slate-400 peer-checked/one:bg-slate-400 peer-checked/one:text-white" htmlFor="one">1</label>

            <input className="hidden peer/two" type="radio" id="two" name="rating" value="2" />
            <label className="rounded-full bg-slate-700 flex items-center justify-center h-12 w-12 cursor-pointer hover:bg-orange-500 hover:text-white text-slate-400 peer-checked/two:bg-slate-400 peer-checked/two:text-white" htmlFor="two">2</label>

            <input className="hidden peer/three" type="radio" id="three" name="rating" value="3" />
            <label className="rounded-full bg-slate-700 flex items-center justify-center h-12 w-12 cursor-pointer hover:bg-orange-500 hover:text-white text-slate-400 peer-checked/three:bg-slate-400 peer-checked/three:text-white" htmlFor="three">3</label>

            <input className="hidden peer/four" type="radio" id="four" name="rating" value="4" />
            <label className="rounded-full bg-slate-700 flex items-center justify-center h-12 w-12 cursor-pointer hover:bg-orange-500 hover:text-white text-slate-400 peer-checked/four:bg-slate-400 peer-checked/four:text-white" htmlFor="four">4</label>

            <input className="hidden peer/five" type="radio" id="five" name="rating" value="5" />
            <label className="rounded-full bg-slate-700 flex items-center justify-center h-12 w-12 cursor-pointer hover:bg-orange-500 hover:text-white text-slate-400 peer-checked/five:bg-slate-400 peer-checked/five:text-white" htmlFor="five">5</label>
          </div>
          <button className="bg-orange-500 rounded-full text-white font-semibold py-2 px-3 uppercase tracking-widest hover:bg-white hover:text-orange-500" type="submit">Submit</button>
        </form>
      )}
      {submitted && (
        <div className="bg-gradient-to-b from-slate-800 to-slate-900 max-w-96 rounded-lg flex flex-col items-center gap-8 px-10 py-10">
          <Image src="/illustration-thank-you.svg" alt="thank you" width="150" height="150" />
          <span className="text-orange-500 rounded-full bg-slate-800 px-6 py-2 text-sm">You selected {rating} out of 5</span>
          <div className="text-center flex flex-col gap-4">
            <h1 className="text-white text-2xl font-bold mt-4">Thank you!</h1>
            <p className="text-slate-400 text-sm">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
          </div>
        </div>
      )}
    </main>
  )
}
