# Use a base image with JDK 11 installed
FROM openjdk:17-alpine

# Set the working directory inside the container
WORKDIR /app

# Install curl (if not already installed) to download artifacts
RUN apk --no-cache add curl

# Download the Spring Boot application JAR file from Nexus
RUN curl -u admin:nexus "http://192.168.33.10:8081/repository/AhmedRepo/tn/esprit/DevOps_Project/1.0-SNAPSHOT/DevOps_Project-1.0-20240413.161820-3.jar" --output /app/DevOps_Project-1.0-20240413.161820-3.jar
# Expose the port that the Spring Boot application will run on
EXPOSE 8050

# Specify the command to run the Spring Boot application when the container starts
ENTRYPOINT ["java", "-jar", "DevOps_Project-1.0-20240413.161820-3.jar"]