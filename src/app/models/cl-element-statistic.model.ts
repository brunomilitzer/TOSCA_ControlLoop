import { ControlLoopParticipantId } from './cl-participant-id.model';
import { Timestamp } from 'rxjs';
import { ControlLoopState } from './enums/cl-state.enum';

export class ControlLoopElementStatistic {
  public id: string;
  public participantId: ControlLoopParticipantId;
  public timestamp: Timestamp<string>;
  public controlLoopState: ControlLoopState;
  public clElementUptime: number;
}
