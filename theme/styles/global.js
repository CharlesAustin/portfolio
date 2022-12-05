import { mode } from "@chakra-ui/theme-tools";

const styles = {
    global: (props) => ({
        body: {
            bg: mode("mint.100", "slate.900")(props),
        },
    }),
};

export default styles;
