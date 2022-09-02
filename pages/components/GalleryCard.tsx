import * as React from 'react'
import Image from 'next/image'

type Props = {
    imageUrl: string
}

const GalleryCard = ({ imageUrl }: Props): JSX.Element => {
    return (
        <div className={"relative"}>
            <div className="inset-0 z-10 opacity-0 absolute flex transition duration-200 ease-in hover:opacity-100  w-full, h-full bg-emerald-300 hover:bg-opacity-80">
                <div className="mx-auto text-white text-2xl z-10 self-center uppercase tracking-widest">
                    Lorem Ipsum
                </div>
            </div>
            <Image
                src={imageUrl}
                alt=""
                width="1920px"
                height="1000px"
                layout="responsive"
            />
        </div>
    );
}

export default GalleryCard