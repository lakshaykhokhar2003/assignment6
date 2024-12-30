import Frame from "@/components/Frame.tsx";
import {Toaster} from "sonner";

const App = () => {
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <Frame/>
            <Toaster />
        </div>
    )
}

export default App;