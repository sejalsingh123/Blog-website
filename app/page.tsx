import WelcomeCard from "@/components/Welcomecard";
import Feed from "@/components/Feed";



export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bckgrnd_home.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <WelcomeCard imgUrl="/images/profile.jpg" title="Welcome to My Blog" subtitle="Thoughts, stories & ideas worth sharing" />
        </div>
      </section>

      {/* BLOGS SECTION */}
      <Feed />
    </main>
  );
}
