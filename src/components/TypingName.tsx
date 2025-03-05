import Typewriter from 'typewriter-effect';

const TypingEffect = () => {
  return (
    <div>
    <span className="block text-indigo-600 dark:text-indigo-400 xl:inline">
        <Typewriter
          options={{
            strings: ["IIT Madras", "IIT Mandi"],
            autoStart: true,
            loop: true,
            delay: 100,
            deleteSpeed: 50,
          }}
        />
        </span>
    </div>
  );
};

export default TypingEffect;
