class ProgressAnalyzer:

    def analyze(self, evaluation):

        score = evaluation.get("score", 0)

        if score >= 90:
            grade = "A"
            level = "Expert"
            readiness = "Excellent"

        elif score >= 75:
            grade = "B"
            level = "Advanced"
            readiness = "Good"

        elif score >= 60:
            grade = "C"
            level = "Intermediate"
            readiness = "Average"

        elif score >= 40:
            grade = "D"
            level = "Beginner"
            readiness = "Needs Practice"

        else:
            grade = "F"
            level = "Needs Improvement"
            readiness = "Poor"

        evaluation["grade"] = grade
        evaluation["knowledge_level"] = level
        evaluation["exam_readiness"] = readiness

        return evaluation


progress_analyzer = ProgressAnalyzer()