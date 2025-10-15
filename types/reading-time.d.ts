declare module "reading-time" {
  interface ReadingTimeResult {
    time: number;
    minutes: number;
    seconds: number;
    words: number;
  }

  interface ReadingTimeOptions {
    wordsPerMinute?: number;
  }

  function readingTime(text: string, options?: ReadingTimeOptions): ReadingTimeResult;

  export = readingTime;
}
