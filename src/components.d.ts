/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppRoot {
    }
    interface GameTrexRunner {
    }
    interface MapAssessment {
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLGameTrexRunnerElement extends Components.GameTrexRunner, HTMLStencilElement {
    }
    var HTMLGameTrexRunnerElement: {
        prototype: HTMLGameTrexRunnerElement;
        new (): HTMLGameTrexRunnerElement;
    };
    interface HTMLMapAssessmentElement extends Components.MapAssessment, HTMLStencilElement {
    }
    var HTMLMapAssessmentElement: {
        prototype: HTMLMapAssessmentElement;
        new (): HTMLMapAssessmentElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "game-trex-runner": HTMLGameTrexRunnerElement;
        "map-assessment": HTMLMapAssessmentElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface GameTrexRunner {
        "onGameScore"?: (event: CustomEvent<any>) => void;
        "onGameStart"?: (event: CustomEvent<any>) => void;
    }
    interface MapAssessment {
        "onLocation"?: (event: CustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "game-trex-runner": GameTrexRunner;
        "map-assessment": MapAssessment;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "game-trex-runner": LocalJSX.GameTrexRunner & JSXBase.HTMLAttributes<HTMLGameTrexRunnerElement>;
            "map-assessment": LocalJSX.MapAssessment & JSXBase.HTMLAttributes<HTMLMapAssessmentElement>;
        }
    }
}
