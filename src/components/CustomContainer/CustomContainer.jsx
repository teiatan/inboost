import { Checkbox } from "../Checkbox/Checkbox"

export const CustomContainer = () => {
    return(
        <div style={{width: '160px', height: '85px', backgroundColor: '#D1E7DD', borderRadius: '3px', padding: '17px 2px 2px 2px'}}>
            <div style={{width: '100%', height: '50px', borderRadius: '3px', backgroundColor: '#FFFFFF'}}></div>
            <Checkbox />
        </div>
    );
}