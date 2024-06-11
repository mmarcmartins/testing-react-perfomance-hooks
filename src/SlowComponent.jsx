import { useContext } from "react";
import { useLog } from "./useLog";
import { wait } from './utils';
import { ContextTest } from "./FixOneContext/AppContext";
import { useStore } from "./FixOneZustand/store";

export const SlowComponent = (props) => {
    const waitTime = useStore(state => state.waitTime);
    wait(waitTime);
    useLog(`Slow component ${props.name}`);
    return (<span>{props.name}</span>)
}