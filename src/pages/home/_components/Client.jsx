import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: "https://placehold.co/400x300?text=Image+1",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "https://placehold.co/400x300?text=Image+2",
    },
    {
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://placehold.co/400x300?text=Image+3",
    }
];

const ReviewCard = ({
    img,
    name,
    username,
    body,
}) => {
    return (
        <figure
            className={cn(
                "relative w-[300px] cursor-pointer overflow-hidden flex-col ",
            )}
        >
            <img className="rounded-full flex justify-center" width="150" height="150" alt="Client-images" src={img} />
        </figure>
    );
};

export function Client() {
    return (
        <div id="client" className="p-16 relative flex h-[400px] bg-white w-full flex-col items-center justify-center overflow-hidden">
            <h2 className="text-4xl font-bold font-poppins underline text-center mb-16">Client</h2>
            <Marquee pauseOnHover className="[--duration:10s]">
                {reviews.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}
