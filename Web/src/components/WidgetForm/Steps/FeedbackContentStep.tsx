import { ArrowLeft, Camera } from "phosphor-react"
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void
    onFeedbackSent: () => void
}

export function FeedbackContentStep ({feedbackType,onFeedbackRestartRequested,onFeedbackSent}:FeedbackContentStepProps) {
    const [screenShot, setScreenShot] = useState<string | null>(null)
    const feedbackTypesInfo = feedbackTypes[feedbackType]
    const [comment, setComment] = useState('')

    const handleSubmitFeedback = (e:FormEvent) => {
      e.preventDefault()
      console.log({
        screenShot,
        comment
      })
      onFeedbackSent()
    }

    return (
        <>
         <header>
             <button
             onClick={onFeedbackRestartRequested}
             type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100">
                 <ArrowLeft weight="bold" className="w-4 h-4" />
             </button>

             <span className="text-xl leading-6 flex items-center gap-2">
                <img src={feedbackTypesInfo.image.source} alt={feedbackTypesInfo.image.alt} />
                {feedbackTypesInfo.title}
             </span>
             <CloseButton />
         </header>
 
         <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
            <textarea onChange={(e) => setComment(e.target.value)} className="min-w-[384px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
             placeholder="Conte com detalhe o que está acontecendo..." />
          <footer className="flex mt-2 gap-2">
            <ScreenshotButton
               screenShot={screenShot}
               onScreenShotTook={setScreenShot}
            />
              <button
                disabled={comment.length === 0}
                type="submit"
                className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
              >
                Enivar feedback
              </button>
          </footer>
         </form>
    </>
    )
}