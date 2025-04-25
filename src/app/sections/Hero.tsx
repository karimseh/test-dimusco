import Block from "../components/Block";
import DocIcon from "../../assets/icons/doc.svg";
import PlayStoreIcon from "../../assets/icons/play-store.svg";
import AppStoreIcon from "../../assets/icons/app-store.svg";
import MicrosoftStoreIcon from "../../assets/icons/microsoft-store.svg";
import MacAppStoreIcon from "../../assets/icons/mac-app-store.svg";
import PlayIcon from "../../assets/icons/play.svg";
import RightIcon from "../../assets/icons/right.svg";
import LeftIcon from "../../assets/icons/left.svg";
import ShuffleIcon from "../../assets/icons/shuffle.svg";
import LineIcon from "../../assets/icons/line.svg";
import NextIcon from "../../assets/icons/next.svg";
import BlockItem from "../components/ui/BlockItem";
import Image from "next/image";
import PublishersBlock from "../components/PublishersBlock";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="max-w-[1600px] mx-auto min-h-[calc(100vh-80px)] flex flex-col items-stretch gap-10 md:gap-20 px-4">
            <div className="flex w-full flex-col items-center justify-center gap-4 md:gap-6 text-center py-8">
                <h1 className="text-fluid-xl tracking-wider font-extrabold text-[var(--primary)]">Use your sheet music with any device</h1>
                <p className="text-fluid-base font-normal">
                    for yourself and in Any Group from a Band to an Orchestra
                </p>
            </div>

            <div className="flex flex-col xl:flex-row items-center  gap-12 lg:gap-6 justify-between py-6 px-4">
                <div className="flex flex-col items-center justify-center gap-8 w-full lg:w-1/2 lg:max-w-[600px]">
                    <div className="relative sm:aspect-square w-full sm:max-w-[500px] mx-auto">
                        <div className="sm:rounded-full sm:border-[1.5px] w-full h-full flex flex-col gap-8 sm:flex-row items-center justify-center bg-black/5 overflow-hidden">
                            {/* Center text */}
                            <div className="text-center max-w-[70%] z-10">
                                <h3 className="text-fluid-lg font-bold text-[var(--primary)]">Automatic Synchronization</h3>
                                <p className="text-fluid-base">of your annotations between All your Devices and within Groups</p>
                            </div>

                            <div className=" absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[33%] w-auto hidden sm:block ">
                                <Image
                                    src="/images/apple-tablet-iphone.png"
                                    alt="Tablet and iPhone devices"
                                    width={123}
                                    height={141}
                                    priority
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[40%] max-w-[33%] w-auto hidden sm:block ">
                                <Image
                                    src="/images/mac.png"
                                    alt="Mac devices"
                                    width={195}
                                    height={120}
                                    priority
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="absolute top-[13%] left-[-15%] -translate-y-3 max-w-[33%] w-auto  hidden sm:block">
                                <Image
                                    src="/images/android.png"
                                    alt="Android devices"
                                    width={153}
                                    height={129}
                                    priority
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="absolute top-[15%] right-0 translate-x-[50%] translate-y-2.5 max-w-[33%] w-auto  hidden sm:block">
                                <Image
                                    src="/images/laptop.png"
                                    alt="Windows devices"
                                    width={204}
                                    height={169}
                                    priority
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="absolute bottom-[13%] left-2 -translate-x-[50%] max-w-[33%] w-auto  hidden sm:block">
                                <Image
                                    src="/images/iphone.png"
                                    alt="IPhone devices"
                                    width={96}
                                    height={181}
                                    priority
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="absolute bottom-0 right-[15%] translate-x-[50%] max-w-[33%] w-auto  hidden sm:block">
                                <Image
                                    src="/images/windows.png"
                                    alt="Windows device"
                                    width={146}
                                    height={147}
                                    priority
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="flex items-center justify-center gap-4  flex-wrap">


                                <div className="sm:absolute sm:top-[5%] sm:left-[5%]  ">
                                    <Link href="https://play.google.com/store/apps/details?id=com.dimusco.dimusco&hl=en&gl=US" target="_blank" rel="noopener noreferrer">
                                        <PlayStoreIcon />
                                    </Link>
                                </div>
                                <div className="sm:absolute sm:top-[5%] sm:right-[5%]  ">
                                    <Link href="https://apps.apple.com/us/app/dimusco/id6443580984" target="_blank" rel="noopener noreferrer">
                                        <AppStoreIcon />
                                    </Link>
                                </div>
                                <div className="sm:absolute sm:bottom-[35%] sm:right-0 sm:translate-x-[50%]  ">
                                    <Link href="https://apps.microsoft.com/store/detail/dimusco/9NQKX3JZ2F4T?hl=en-us&gl=US" target="_blank" rel="noopener noreferrer">
                                        <MicrosoftStoreIcon />
                                    </Link>
                                </div>
                                <div className="sm:absolute sm:bottom-[5%] sm:left-2 ">
                                    <Link href="https://apps.apple.com/us/app/dimusco/id6443580984" target="_blank" rel="noopener noreferrer">
                                        <MacAppStoreIcon />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <PublishersBlock />
                </div>

                {/* Info block watch - read - Get */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:w-1/2 mx-auto lg:mx-0">
                    <Block linkTitle="Watch" description="Videos tell you all about dimusco" >
                        <div className="flex flex-col justify-center items-center gap-2 sm:gap-4">

                            <div className="flex items-center justify-center gap-4 sm:gap-8">
                                <ShuffleIcon />
                                <div className="flex items-center justify-center gap-4">
                                    <LeftIcon />
                                    <PlayIcon />
                                    <RightIcon />
                                </div>
                                <NextIcon />
                            </div>
                            <LineIcon  className="hidden sm:block"/>
                        </div>
                    </Block>
                    <Block linkTitle="Read" description="See all other info like Costs and Q&A">
                        <DocIcon />
                    </Block>
                    <Block linkTitle="Publish" extraTitle="Sheet Music" className="md:col-span-2 items-center md:items-start">
                        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 md:gap-x-8 mt-1">
                            <BlockItem title="Compostions" />
                            <BlockItem title="Free Scores" />
                            <BlockItem title="Adaptations" />
                            <BlockItem title="Anotations" />
                        </div>
                    </Block>
                    <Block linkTitle="Get" extraTitle="Sheet Music" className="md:col-span-2 items-center md:items-start">
                        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 md:gap-x-8 mt-1">
                            <BlockItem title="Major Publishers" />
                            <BlockItem title="Compostions & Adaptations" />
                            <BlockItem title="Public Domain" />
                            <BlockItem title="Anotations" />
                        </div>
                    </Block>
                </div>
            </div>
        </section>
    );
}
