import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Join.css";

const Join = () => {
  const navigate = useNavigate();

  const onIndicationClick = useCallback(() => {
    navigate("/indication-sign-symptoms");
  }, [navigate]);

  const onDisorderClick = useCallback(() => {
    navigate("/disorder");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/question-answer");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/question-answer");
  }, [navigate]);

  const onGroupButton2Click = useCallback(() => {
    navigate("/question-answer");
  }, [navigate]);

  return (
    <div className="join">
      <div className="rectangle-parent12">
        <div className="group-child42" />
        <img className="layer-1-icon" alt="" src="/layer-1.svg" />
        <button className="home">Home</button>
        <button className="indication" onClick={onIndicationClick}>
          Indication
        </button>
        <button className="about-us">About us</button>
        <button className="disorder1" onClick={onDisorderClick}>
          Disorder
        </button>
        <div className="mental-health-parent">
          <div className="mental-health">{`Mental Health `}</div>
          <div className="is-a-priority">Is a Priority</div>
        </div>
        <div className="group-child43" />
        <div className="calmminds">CalmMinds</div>
        <div className="group-parent">
          <div className="ellipse-parent18">
            <div className="group-child44" />
            <div className="assess-your-sleep6">{`Assess your sleep, anxiety, stress & mood. `}</div>
          </div>
          <div className="ellipse-parent19">
            <div className="group-child44" />
            <div className="assess-your-sleep6">{`Find out which areas you could improve. `}</div>
          </div>
          <div className="ellipse-parent20">
            <div className="group-child44" />
            <div className="assess-your-sleep6">{`Get resources to support you. `}</div>
          </div>
        </div>
        <div className="start-your-journey">
          Start your journey to mental wellness.
        </div>
        <img className="logo-icon" alt="" src="/logo.svg" />
      </div>
      <div className="group-container">
        <div className="rectangle-parent13">
          <div className="group-child47" />
          <div className="parent-test-parent">
            <div className="parent-test">Parent Test</div>
            <button className="vector-parent" onClick={onGroupButtonClick}>
              <img className="rectangle-icon" alt="" src="/rectangle-20.svg" />
              <div className="start">Start</div>
            </button>
            <div className="check-your-childs">
              Check your child’s mental health by giving this test.
            </div>
          </div>
        </div>
        <div className="rectangle-parent14">
          <div className="group-child47" />
          <div className="children-test">Children Test</div>
          <button className="vector-group" onClick={onGroupButton1Click}>
            <img className="rectangle-icon" alt="" src="/rectangle-201.svg" />
            <div className="start1">Start</div>
          </button>
          <div className="check-your-mental">
            Check your mental health by giving this test.
          </div>
        </div>
        <div className="rectangle-parent15">
          <div className="group-child50" />
          <div className="teacher-test">Teacher Test</div>
          <button className="vector-container" onClick={onGroupButton2Click}>
            <img className="rectangle-icon" alt="" src="/rectangle-202.svg" />
            <div className="start1">Start</div>
          </button>
          <div className="check-your-students">
            Check your student’s mental health by giving this test.
          </div>
        </div>
      </div>
      <div className="join-child" />
      <img className="join-item" alt="" src="/group-98.svg" />
      <div className="group-parent1">
        <div className="calmminds-parent">
          <div className="calmminds1">CalmMinds</div>
          <img className="logo-icon1" alt="" src="/logo1.svg" />
        </div>
        <div className="group-child52" />
        <div className="activity">Activity</div>
        <div className="rectangle-parent16">
          <div className="group-child53" />
          <div className="service">Service</div>
        </div>
        <div className="group-parent2">
          <div className="image-5-parent">
            <button className="image-5" />
            <button className="image-7" />
            <button className="image-8" />
            <button className="image-9" />
            <button className="image-10" />
          </div>
          <div className="feedback">Feedback</div>
          <div className="group-wrapper">
            <div className="rectangle-parent17">
              <div className="group-child54" />
              <button className="rectangle-parent18">
                <div className="group-child55" />
                <img
                  className="icon-chevron-right"
                  alt=""
                  src="/-icon-chevron-right.svg"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="group-parent3">
          <div className="ellipse-parent21">
            <div className="group-child56" />
            <div className="exercise">Exercise</div>
          </div>
          <div className="ellipse-parent22">
            <div className="group-child56" />
            <div className="meditation">Meditation</div>
          </div>
          <div className="ellipse-parent23">
            <div className="group-child56" />
            <div className="breathing">Breathing</div>
          </div>
          <div className="ellipse-parent24">
            <div className="group-child56" />
            <div className="breathing">Reading</div>
          </div>
          <div className="ellipse-parent25">
            <div className="group-child56" />
            <div className="breathing">Self - Care</div>
          </div>
        </div>
        <div className="group-parent4">
          <div className="ellipse-parent26">
            <div className="group-child56" />
            <div className="exercise">Therapy</div>
          </div>
          <div className="ellipse-parent27">
            <div className="group-child56" />
            <div className="meditation">Meditation</div>
          </div>
          <div className="ellipse-parent28">
            <div className="group-child56" />
            <div className="breathing">Yoga</div>
          </div>
          <div className="ellipse-parent29">
            <div className="group-child56" />
            <div className="breathing">Reading</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
