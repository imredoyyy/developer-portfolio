import Image from "next/image";

import Container from "@/components/layout/container";
import Tag from "@/components/tag";

const About = () => {
    return (
        <Container id="about">
            <div className="self-center">
                <Tag label="About" />
            </div>

            <div className="grid grid-cols-1 gap-8 place-items-center md:grid-cols-2">
                <div className="flex items-center justify-center w-full h-full">
                    <Image
                        src="/images/coder.png"
                        alt="coder"
                        width={320}
                        height={280}
                    />
                </div>

                <div className="flex flex-col max-w-xl text-center md:text-left gap-y-4">
                    <p className="text-sm text-muted-foreground lg:text-base">
                        I am a passionate full-stack developer, UI/UX enthusiast
                        and tech enthusiast. I like to build cutting-edge web
                        applications using modern technologies such as React,
                        Next.js, Node.js, MongoDB, TypeScript and many more.
                    </p>
                    <p className="text-sm text-muted-foreground lg:text-base ">
                        Pixel-perfect design, user experience, writing clean and
                        readable coder matters most to me. I always try my best
                        to bring technical and visual aspect of digital realm to
                        life.
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default About;
