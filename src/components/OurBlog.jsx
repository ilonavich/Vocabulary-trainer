import React from "react";
import blogImage from "../assets/images/hintergrund-yap-bild_blog.jpg"; // Importing the image

const OurBlog = () => {
  return (
    <div>
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
          alt="Background for Yap Blog"
          src={blogImage} // Using the imported image here
          className="h-56 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6">
          <time datetime="2022-10-10" className="block text-xs text-gray-500">
            {" "}
            10th Oct 2022{" "}
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg text-gray-900">
              The Key to Language Learning:
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            Practice Every Day with Yap!** Language learning can feel
            overwhelming, but with consistent practice, it becomes second
            nature. Yap is designed to help you integrate language exercises
            into your daily routine effortlessly. Whether you’re mastering
            vocabulary or refining translations, Yap keeps you motivated and
            engaged. <br /> Why Visual Learning Matters** Did you know that 65%
            of people are visual learners? Yap’s flashcard feature turns complex
            vocabulary into visual cues, making retention faster and more
            effective. Build your word bank in German, English, or any other
            supported language, and watch your fluency soar! <br /> Tips for
            Effective Practice** - **Set Goals**: Decide on the number of words
            or phrases you want to learn each day. - **Review Regularly**: Use
            Yap’s flashcard system to revisit and reinforce vocabulary. -
            **Customize Your Translations**: Personalize translations to fit
            your learning style and context. <br /> #### **Join a Community of
            Learners** With Yap, you’re never alone. Share your progress,
            exchange tips, and even organize language practice meetups with
            friends. The key to success is collaboration and consistent effort.
            <br /> Start Your Journey Today** Language mastery doesn’t happen
            overnight, but with Yap, it’s a journey you’ll enjoy. Let Yap be
            your trusted companion in achieving fluency one word at a time. 😊
          </p>
        </div>
      </article>
    </div>
  );
};

export default OurBlog;
