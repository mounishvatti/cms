import Navbar from "@/components/Navbar"

export default function AboutUs() {
    return (
        <>
        <Navbar />
        <div className="flex flex-col items-center justify-center p-2 md:p-10">
            <div className="flex w-full max-w-3xl flex-col gap-4">
                <h1 className="text-3xl font-bold dark:text-blue-100">About Us</h1>
                <p className="dark:text-gray-400 text-gray-500">
                    Welcome to Coursera – your destination for transforming
                    aspirations into achievements through world-class education!

                    At Coursera, we believe that learning should be accessible,
                    empowering, and tailored to your goals. Whether you’re a
                    student aiming to ace your academics, a professional
                    advancing your career, or a lifelong learner exploring new
                    passions, our platform provides a diverse range of
                    expert-curated courses to help you succeed.

                    With a focus on quality, flexibility, and innovation,
                    Coursera bridges the gap between learners and top educators
                    worldwide. Our mission is to make high-quality education
                    accessible to everyone, anytime, anywhere.

                    Join millions of learners who trust Coursera to guide their
                    journey of growth and success. Let’s shape a brighter future
                    together!
                </p>
            </div>
        </div>
        </>
    );
}
