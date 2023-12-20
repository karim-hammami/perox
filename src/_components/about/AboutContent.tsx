
import React from "react";
import Image from "next/image";

export const AboutContent = () => {
    return (
        <div className="bg-background">
            <div className="pt-36 flex items-center justify-center">
                <h1 className="text-6xl text-primary font-bold">About Me</h1>
            </div>
            <div className="bg-background">
                <div className="px-48 sm:px-12">
                    <div className="lg:flex xl:flex 2xl:flex sm:flex sm:flex-col items-center justify-around my-28">
                    <p className="text-primary font-bold text-4xl  sm:text-2xl sm:mb-16 w-96 sm:w-80">Skander Werzli A.k.a PEROX was born on January 5th 2001 in La Marsa, Tunis.</p>
                    <Image src="/first.png" alt="second image" height={400} width={400} priority />
                    </div>

                    <div className="lg:flex xl:flex 2xl:flex sm:flex sm:flex-col-reverse items-center justify-around my-28">
                    <Image src="/thirdly.png" alt="first image" height={400} width={400} />

<p className="text-primary font-bold text-3xl sm:text-xl sm:mb-16 w-[450px] sm:w-80">PEROX began his career at the age of 13 by producing electronic music, in 2015 he entered music school to further his knowledge in music theory, in 2018 he began producing hip-hop music and started experimenting with mixing electronic music and hip-hop together to create a unique flavor and sound, in 2020 he signed with a Tunisian production company and began producing for a variety of mainstream artists in the Tunisian Hip-hop scene.</p>
                    </div>

                    <div className="lg:flex xl:flex 2xl:flex sm:flex sm:flex-col items-center justify-around my-28 bg-background">
                    <p className="text-primary font-bold text-3xl sm:text-xl sm:mb-16 w-[475px] sm:w-80">PEROX produces and publish his music on a variety of music platforms and social media sites, he also distribute music on digital music platforms under the name of his company which he founded in 2018 "PEROXANA RECORDS" that features other artists. <br />
PEROX has collaborated with many artists and music producers across the globe expanding his Discography and captivating millions of streams on Youtube and other platforms.</p>
                    <Image src="/secondly.png" alt="third image" height={400} width={400} />
                    </div>
                </div>
            </div>
        </div>
    )
}