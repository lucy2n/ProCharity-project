import './index.css';
import { inputTextDelete } from '../../utils/utils';
import Counter from "./components/Counter.js";

inputTextDelete()

const inputWhyVolonteer = new Counter(".input-why-volunteer");
const inputSkills = new Counter(".input-skills");
inputWhyVolonteer.counter();
inputSkills.counter();