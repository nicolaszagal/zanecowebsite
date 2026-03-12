"use client"
export default function AboutGalery(){
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 space-y-10">
                <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                    <div className="group overflow-hidden rounded-2xl shadow-lg">
                        <img
                            src="/img/about/gallery1.jpg"
                            alt="Gallery Image 1"
                            className="
                            w-full
                            h-[350px]
                            object-cover
                            brightness-90
                            transition
                            duration-300
                            group-hover:brightness-100
                            group-hover:scale-105
                            "
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="group overflow-hidden rounded-2xl shadow-lg">
                        <img
                            src="/img/about/gallery2.jpg"
                            alt="Gallery Image 2"
                            className="
                            w-full
                            h-[350px]
                            object-cover
                            brightness-90
                            transition
                            duration-300
                            group-hover:brightness-100
                            group-hover:scale-105
                            "
                        />
                    </div>

                    <div className="group overflow-hidden rounded-2xl shadow-lg">
                        <img
                            src="/img/about/gallery3.jpg"
                            alt="Gallery Image 3"
                            className="
                            w-full
                            h-[350px]
                            object-cover
                            brightness-90
                            transition
                            duration-300
                            group-hover:brightness-100
                            group-hover:scale-105
                            "
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}