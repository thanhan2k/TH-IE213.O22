import Input from "./Input";

function Form() {
    return ( 
        <div  className="flex justify-center items-center">
            <form className="flex flex-col w-1/3 bg-pink-400">
                <Input lable="Điểm KH1:" type="number" />
                <Input lable="Điểm KH2:" type="number"/>
                <Input lable="Điểm trung bình:" type="number" disabled="true"/>
                <Input lable="Kết quả:" type="text" disabled="true"/>
                <Input lable="Xếp loại học lực:" type="text" disabled="true"/>
            </form>
        </div>
     );
}

export default Form;