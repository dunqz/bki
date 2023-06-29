import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { motion } from "framer-motion";
import { useRef } from "react";
import badi from "../src/assets/badi.jpg"
import bki from "../src/assets/bki.png"
import collage from "../src/assets/collage.jpg"
import sakto from "../src/assets/sakto.jpg"
import sethpng from "../src/assets/sethpng.png"
import ve from "../src/assets/ve.jpg"

export const App = () => {
  const parallax = useRef<IParallax>(null!);
  const scrollRef = useRef(null);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Parallax
        style={{ top: "0", left: "0", background: "#242526" }}
        ref={parallax}
        pages={4}
      >
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#2B2B37" }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#1B1A22" }}
        />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={4}
          style={{
            backgroundImage: `url(${sethpng})`,
            backgroundSize: "75% auto",
            backgroundRepeat: "repeat",
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ root: scrollRef }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeIn" }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={collage}
              style={{ width: "44%", filter: "brightness(.3)",cursor:"pointer", }}
            />
            <motion.span
              initial={{ x: "-70%", y: "-50%" }}
              whileInView={{ x: "-50%", y: "-50%" }}
              transition={{ delay: 0.4, duration: 1.7, ease: "easeIn" }}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#701950",
                fontSize: "4.7vw",
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              βετα Καρρα ιστα
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 2, ease: "easeIn" }}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, 50%)",
                color: "#701950",
                fontSize: "3vw",
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              LOWER PAKIGNE
            </motion.span>
          </motion.div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <div>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.9, ease: "easeIn" }}
              src={bki}
              style={{ width: "9%", marginLeft: "78%" }}
            />
            <motion.h1
              initial={{ x: "-100%" }}
              whileInView={{ x: "0" }}
              transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
              style={{
                color: "#ffffff",
                width: "50% auto",
                marginLeft: "73%",
                zIndex: 100,
              }}
            >
              THE SINGLE MOM SLAYER
            </motion.h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.3}
          speed={-0.2}
          style={{ pointerEvents: "none" }}
        >
          <div>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.9, ease: "easeIn" }}
              src={bki}
              style={{ width: "9%", marginLeft: "20%",cursor:"pointer" }}
            />
            <motion.h1
              initial={{ x: "30%" }}
              whileInView={{ x: "0" }}
              transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
              style={{
                color: "#ffffff",
                width: "100% auto",
                marginLeft: "18%",
                zIndex: 100,
              }}
            >
              BREAKING BADI
            </motion.h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <div>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.9, ease: "easeIn" }}
              src={bki}
              style={{ width: "9%", marginLeft: "70%" }}
            />
            <motion.h1
              initial={{ x: "-100%" }}
              whileInView={{ x: "0" }}
              transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
              style={{
                color: "#ffffff",
                width: "100% auto",
                marginLeft: "69%",
                zIndex: 100,
              }}
            >
              VEEEEEENAAX
            </motion.h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={sakto} style={{ width: "40%",cursor:"pointer", }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => parallax.current.scrollTo(3)}
        >
          <img src={badi} style={{ width: "27%",cursor:"pointer", }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <img src={ve} style={{ width: "30%", height: "70%", cursor:"pointer",}} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
