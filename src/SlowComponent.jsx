import { useLog } from "./useLog";
import { wait } from './utils';

export const SlowComponent = (props) => {
    wait(300);
    useLog(`Slow component ${props.name}`);
    return (<span>{props.name}</span>)
}