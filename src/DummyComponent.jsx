import { useLog } from "./useLog";

export const DummyComponent = (props) => { 
    useLog(`Dummy component ${props.name}`);
    return (<span>{props.name}</span>);
}