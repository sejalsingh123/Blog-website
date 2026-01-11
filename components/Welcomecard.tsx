'use Client'
import Image from "next/image";

export default function WelcomeCard(props={imgUrl:"", title:"", subtitle:""}) {
  return (
    <div className="w-[320px] bg-[#a57445] p-8 text-center">
        <div className="flex justify-center mb-6">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white">
            <Image
                src={props.imgUrl || "/images/profile.jpg"}  
                alt="profile"
                width={160}
                height={160}
                className="object-cover"
            />
            </div>
        </div>
        <h1 className="text-white text-4xl font-serif mb-2">
            {props.title}
        </h1>
        <p className="text-white text-lg">
            {props.subtitle || "Welcome to my blog! Here you'll find articles on various topics including technology, lifestyle, and personal growth. Enjoy your stay!"}
        </p>
    </div>
  );
}
