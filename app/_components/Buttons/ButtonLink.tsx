import { GithubIcon } from "../icons/Githubicon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";
import { EmailIcon } from "../icons/EmailIcon";
import { ResumeIcon } from "@radix-ui/react-icons";
import { StickyNote } from "lucide-react";


export  const ButtonGithub = () => {
    return (
        
        <a href="https://github.com/NicolasCaze" target="_blank" rel="noopener noreferrer">
      <Button className="bg-[rgba(255,255,255,0.08)] flex dark:hover:bg-white/10 hover:bg-slate-200  items-center text-1xl text-dark gap-5 mr-5">
        <GithubIcon size={20} className="text-primary" />
        Github
      </Button>
    </a>
    )
}

export  const ButtonLinkedin = () => {
    return (
        <a href="https://www.linkedin.com/in/nicolas-caze-8b5117271/" target="_blank" rel="noopener noreferrer">
      <Button className="bg-[rgba(255,255,255,0.08)] flex dark:hover:bg-white/10 hover:bg-slate-200 items-center text-1xl text-dark gap-5 mr-5">
        <LinkedinIcon size={20}  />
        Linkedin
      </Button>
    </a>
    )
}

export  const ButtonResume = () => {
  return (
      
      <a href="https://drive.google.com/drive/u/0/folders/1NCnG8RQfeMCY-BfFjYuAOQlC5Ylmsm0o" target="_blank" rel="noopener noreferrer">
    <Button className="bg-[rgba(255,255,255,0.08)] flex dark:hover:bg-white/10 hover:bg-slate-200  items-center text-1xl text-dark gap-5 mr-5">
      <StickyNote className="text-primary" /> 
      Resume
    </Button>
  </a>
  )
}

export  const ButtonEmail = () => {
   
        
        return (
            <AlertDialog>
              <AlertDialogTrigger asChild>
              <Button variant="outline" className="bg-[rgba(255,255,255,0.08)] flex dark:hover:bg-white/10 hover:bg-slate-200 items-center text-1xl text-dark gap-5 mr-5">
          <EmailIcon size={20}  className="text-primary"/>
          Email
        </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>My email :</AlertDialogTitle>
                  <AlertDialogDescription>
                    cazenicolas64@gmail.com
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )
        }
    



