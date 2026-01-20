import WelcomeCard from "@/components/Welcomecard";
import Feed from "@/components/Feed";



export default function Home() {

  
  return (
    <main>
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen bg-cover bg-center mt-18"
        style={{ backgroundImage: "url('/images/bckgrnd_home.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 min-h-screen flex items-center">
          <div className="pl-16">
            <WelcomeCard
              imgUrl="/images/profile.jpg"
              title="Welcome this is Sejal" //pass title prop
              subtitle="" //pass subtitle prop
            />
          </div>
        </div>
      </section>

      {/* BLOGS SECTION */}
      <Feed />
    </main>
  );
}
