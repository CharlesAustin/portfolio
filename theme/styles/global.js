import { mode } from "@chakra-ui/theme-tools";

const styles = {
    global: (props) => ({
        body: {
            bg: mode("white", "metal.900")(props),
        },
    }),
};

export default styles;
