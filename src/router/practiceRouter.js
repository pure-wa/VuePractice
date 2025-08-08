
import TestVue from "@/components/practice/0.TestVue.vue";
// import TestVue from "@/components/practice/0.TestVue.vue";
import ModelingComponent from "@/components/practice/1.ModelingComponent.vue";
import ConditionalCoponent from "@/components/practice/2.ConditionalCoponent.vue";

export const practiceRouter = [
    
    {
        path: "/practice/test",
        name: "TestVue",
        component : TestVue
    },
    {
        path: "/practice/modeling",
        name: "modeling",
        component : ModelingComponent
    },
    {
        path: "/practice/ConditionalCoponent",
        name: "ConditionalCoponenting",
        component : ConditionalCoponent
    }
]