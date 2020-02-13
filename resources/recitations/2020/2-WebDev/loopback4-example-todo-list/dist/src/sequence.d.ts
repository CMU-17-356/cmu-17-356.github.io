import { Context } from '@loopback/context';
import { FindRoute, InvokeMethod, ParseParams, Reject, RequestContext, Send, SequenceHandler } from '@loopback/rest';
export declare class MySequence implements SequenceHandler {
    ctx: Context;
    protected findRoute: FindRoute;
    protected parseParams: ParseParams;
    protected invoke: InvokeMethod;
    send: Send;
    reject: Reject;
    constructor(ctx: Context, findRoute: FindRoute, parseParams: ParseParams, invoke: InvokeMethod, send: Send, reject: Reject);
    handle(context: RequestContext): Promise<void>;
}
