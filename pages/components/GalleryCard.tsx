import * as React from 'react'
import Image from 'next/image'

type Props = {
    imageUrl: string,
    show: boolean
}

const GalleryCard = ({ imageUrl, show }: Props): JSX.Element => {
    return (
        <div
            className={`relative transition ease-in duration-300 transform ${show ? "" : "translate-y-16 opacity-0"
                }`}
        >
            <div className="inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0">
                <div className=" inset-0 bg-black opacity-70"></div>
                <div className="mx-auto text-white z-10 self-center uppercase tracking-widest text-sm">
                    Hello World
                </div>
            </div>
            <Image
                src={imageUrl}
                alt=""
                layout='fill'
            />
        </div>
    );
}

export default GalleryCard