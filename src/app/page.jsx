import { currentUser } from '@clerk/nextjs/server'
export default async function Home() {
 
const user = await currentUser()
   
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-stone-200 border-8 border-black rounded-2xl">
          <h1 className="text-5xl my-15 font-bold">
            Welcome to the Blog
          </h1>
           {user &&(<div className='font-bold text-4xl my-10'>Hello {user?.firstName}</div>)}
          <p className="text-xl font-semibold mx-5 leading-8 max-w-3xl">
          The Unseen Beauty of Everyday Moments

In our relentless pursuit of grand achievements and monumental experiences, it's easy to overlook the subtle artistry woven into the fabric of our daily lives. We rush from one task to the next, eyes fixed on distant horizons, often missing the quiet symphony of the present.
<br/>
<br/>

Consider the steam rising from your morning coffee, dancing in the light like a fleeting wisp of magic. Or the gentle rustle of leaves outside your window, a whispered conversation between nature and the wind. These aren't just background elements; they are invitations to pause, to breathe, and to appreciate.
<br/>
<br/>

True contentment isn't always found in exotic destinations or life-altering events. More often, it resides in the small, unassuming corners of our existence. The shared laughter with a friend, the satisfying crunch of a perfectly ripe apple, the warmth of sunlight on your skin – these are the moments that accumulate, forming a rich tapestry of joy.
<br/>
<br/>

Learning to see the beauty in the ordinary is a superpower. It transforms mundane routines into mindful rituals and dull moments into opportunities for gratitude. By consciously seeking out these "unseen beauties," we cultivate a deeper connection to our surroundings and, ultimately, to ourselves. Embrace the extraordinary within the commonplace; it's always been there, patiently waiting to be noticed.
          </p>
    </div>
  );
}
