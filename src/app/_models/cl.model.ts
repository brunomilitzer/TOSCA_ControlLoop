import { ControlLoopDefinition } from './cl-definition.model';
import { ControlLoopElement } from './cl-element.model';
import { ControlLoopState } from './_enums/cl-state.enum';
import { ControlLoopOrderedState } from './_enums/cl-ordered-state.enum';

export class ControlLoop {

  constructor(
    public name: string,
    public version: string,
    public definition: ControlLoopDefinition,
    public state: ControlLoopState,
    public orderedState: ControlLoopOrderedState,
    public description: string,
    public elements: ControlLoopElement[]
  ) {
  }
}
