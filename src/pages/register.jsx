import { useForm } from "react-hook-form";
import{ useNavigate } from "react-router-dom";
import{ zodResolver} from "@hookform/resolvers/zod";
import { registerschema } from "./component/registerschema";

function Register(){
    const navigate = useNavigate();
    const{register,handleSubmit,formState:{ errors },} = useForm({resolver: zodResolver(registerschema),});

    function onSubmit1(data){
        console.log(data);
        alert("Register success");
        navigate("/login",{state:data});
    }
    return(
        <div className="min-h-screen flex items-center justify-center bg-[#E8EFF7]">
            <div className="w-full max-w-md bg-white p-6 rounded-x1 shadow-1g">
            <h1 className="text-2xl font-bold text-center mb-6">Register Page</h1>
            <form onSubmit={handleSubmit(onSubmit1)}>
                <label>Username:</label>
                <input type="text" placeholder="enter your user name" {...register("name")} className="w-11/12 border rounded-full p-2"/>
                <p>{errors.name?.message}</p>
                <label>Email:</label>
                <input type="email" placeholder="enter your user mail id" {...register("email")}  className="w-11/12 border rounded-full p-2"/>
                <p>{errors.email?.message}</p>
                <label>Password:</label>
                <input type="password" placeholder="enter your password" {...register("password")}  className="w-11/12 border rounded-full p-2"/>
                <p>{errors.password?.message}</p>
                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    )
}
export default Register