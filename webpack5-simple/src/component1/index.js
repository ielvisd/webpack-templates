import css from "@/component1/style.css";
import image from "@/component1/1.png";
import _ from "lodash";


export function Component1() {
    console.log("I'm Component1", css.some);
    console.log("I'm Component1", image);
    console.log(_);

    const button = document.createElement('button');
    button.textContent = "Dynamic import Component2 from Component1";
    button.addEventListener("click", function() {

        // Dynamic import Component2 from Component1
        import("@/component2").then(({ Component2 }) => {
            Component2();
        });
        
    });

    return button;
}
