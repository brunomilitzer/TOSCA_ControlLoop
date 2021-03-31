import { ControlLoopDefinition } from './cl-definition.model';
import { ControlLoopParticipantId } from './cl-participant-id.model';
import { ControlLoopState } from './_enums/cl-state.enum';
import { ControlLoopOrderedState } from './_enums/cl-ordered-state.enum';

export class ControlLoopElement {

  constructor(
    public id: string,
    public definition: ControlLoopDefinition,
    public participantId: ControlLoopParticipantId,
    public state: ControlLoopState,
    public orderedState: ControlLoopOrderedState,
    public description: string
  ) {
  }
}
